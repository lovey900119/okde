<%@ page language="java"  pageEncoding="utf-8"%>
<%@ include file="../template/common/import.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>

    <title>修改合同</title>
    	<!--  jquery库 -->
		<jc:plugin name="jquery" />
		<!-- jquery-UI -->
		<jc:plugin name="jquery_ui" />
		<!-- 表单验证 -->
		<jc:plugin name="validator" />	
		<!-- 整体样式 -->
		<jc:plugin name="default" />
		<!--  分页 -->
		<jc:plugin name="page" />
		<!-- 基础JS -->
		<jc:plugin name="base_js" />
		<!-- 时间控件 -->
		<jc:plugin name="calendar" />
		
		<script type="text/javascript">
		$(document).ready(function(){
		
			$.formValidator.initConfig({formID:"form1",debug:false,submitOnce:true,
					onError:function(msg,obj,errorlist){
						//$.map(errorlist,function(msg1){alert(msg1)});
						alert(msg);
					}
				});
		$("#academycontractname").formValidator({onShow:"请输入合同名称",onFocus:"至少1个长度",onCorrect:"输入正确"}).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false},onError:"合同名称不能为空,请确认"});
		$("#academycontractsignupDate").formValidator({onShow:"请输入签约日期",onFocus:"至少1个长度",onCorrect:"输入正确"}).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false},onError:"签约日期不能为空,请确认"});
		$("#academycontractbeginDate").formValidator({onShow:"请输入开始日期",onFocus:"至少1个长度",onCorrect:"输入正确"}).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false},onError:"开始日期不能为空,请确认"});
		$("#academycontractendDate").formValidator({onShow:"请输入结束日期",onFocus:"至少1个长度",onCorrect:"输入正确"}).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false},onError:"结束日期不能为空,请确认"});
		
		});
		</script>
	
  </head>
  
  <body>
     
     <form id="form1" name="form1" action="update_academy_contract" method="post" enctype="multipart/form-data">
	 <input type="hidden" name="academycontract.id" value="${param.id}"/>
<!--头部层开始 -->
		<head:head title="修改合同">
		</head:head>
		<!--主体层开始 -->
		<body:body>
		
		
			
			<table class="add_table">	
				<tr>
					<td class="lable_100">合同名称：</td>
					<td>
						<input type="text" class="txt_box_150" name="academycontract.name" id="academycontractname" value="${academycontract.name}" />
					</td>
				    <td><div id="academycontractnameTip" style="width:250px"></div></td>
				</tr>
				
				
				<tr>
					<td class="lable_100">签约日期：</td>
					<td><input id="academycontractsignupDate" name="academycontract.signupDate" value="${academycontract.signupDate}"  class="Wdate" type="text" onclick="WdatePicker()"/></td>
					<td><div id="academycontractsignupDateTip" style="width:250px"></div></td>
				</tr>
					<tr>
					<td class="lable_100">开始日期：</td>
					<td><input id="academycontractbeginDate" name="academycontract.beginDate" value="${academycontract.beginDate}" class="Wdate" type="text" onclick="WdatePicker()"/></td>
					<td><div id="academycontractbeginDateTip" style="width:250px"></div></td>		
				</tr>
				<tr>
					<td class="lable_100">结束日期：</td>
					<td><input id="academycontractendDate" name="academycontract.endDate"  value="${academycontract.endDate}" class="Wdate" type="text" onclick="WdatePicker()"/></td>
					<td><div id="academycontractendDateTip" style="width:250px"></div></td>
				</tr>
				<tr>
					<td class="lable_100">备注:</td>
					<td><textarea name="academycontract.note" id="academycontract.note" cols="45" rows="5" class="txt_box_300" >${academycontract.note}</textarea></td>
				</tr>
				<tr>
					<td></td>
					<td><input class="btn_black_61" id="update_sub" type="submit" value="修改"/></td>
				</tr>
			</table>

		</body:body>
</form>
  </body>
</html>
