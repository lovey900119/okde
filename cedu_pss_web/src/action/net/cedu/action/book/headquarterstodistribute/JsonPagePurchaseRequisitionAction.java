package net.cedu.action.book.headquarterstodistribute;

import java.util.ArrayList;
import java.util.List;

import net.cedu.action.BaseAction;
import net.cedu.biz.book.PurchaseRequisitionBiz;
import net.cedu.entity.book.PurchaseRequisition;
import net.cedu.model.page.PageResult;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 总部派发申购单分页AJAX
 * @author YY
 *
 */
@ParentPackage("json-default")
public class JsonPagePurchaseRequisitionAction extends BaseAction {
 
	private static final long serialVersionUID = 3857742217787704173L;
	@Autowired
	private PurchaseRequisitionBiz purchaseRequisitionBiz;  //中心申购业务层
	private List<PurchaseRequisition> purchaseList=new ArrayList<PurchaseRequisition>(); //中心申购集合
	
	private PurchaseRequisition purchaseRequisition=new PurchaseRequisition();//中心申购实体
	private PageResult<PurchaseRequisition> result=new PageResult<PurchaseRequisition>(); //分页参数
	
	@Action(value="page_list_headquarterstodistribute_purchase", 
			results={
			@Result(name = "success", type = "json", 
					params={
					"contentType", "text/json"
					})})
	/**
	 *  分页集合
	 */
	public String list()
	{
		
		try {
			 
			result.setList(purchaseRequisitionBiz.findHeadquartersToDistributePageListByConditions(purchaseRequisition, result));
		} catch (Exception e) {
			 
			e.printStackTrace();
		}
		return SUCCESS;
	}

	@Action(value="page_count_headquarterstodistribute_purchase", 
			results={
			@Result(name = "success", type = "json", 
					params={
					"contentType",  "text/json"
					} )})
	/**
	 *  分页数量
	 */
	public String count()
	{
		
		try {
			result.setRecordCount(purchaseRequisitionBiz.findHeadquartersToDistributePageCountByConditions(purchaseRequisition, result));

		} catch (Exception e) {
			 
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	
	public PurchaseRequisition getPurchaseRequisition() {
		return purchaseRequisition;
	}

	public void setPurchaseRequisition(PurchaseRequisition purchaseRequisition) {
		this.purchaseRequisition = purchaseRequisition;
	}

	public PageResult<PurchaseRequisition> getResult() {
		return result;
	}

	public void setResult(PageResult<PurchaseRequisition> result) {
		this.result = result;
	}

	public List<PurchaseRequisition> getPurchaseList() {
		return purchaseList;
	}

	public void setPurchaseList(List<PurchaseRequisition> purchaseList) {
		this.purchaseList = purchaseList;
	}
	
	
	
}
