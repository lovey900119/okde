package net.cedu.action.enrollment.enrollmonitorapplication;

import org.springframework.beans.factory.annotation.Autowired;

import net.cedu.action.BaseAction;
import net.cedu.biz.crm.StudentBiz;
import net.cedu.biz.enrollment.AcademyEnrollBatchBiz;
import net.cedu.entity.crm.Student;
import net.cedu.entity.enrollment.AcademyEnrollBatch;

public class ListSubmitEnrollMonitorApplicationAction extends BaseAction{

	private static final long serialVersionUID = 2202525031665983942L;
	@Autowired
	private StudentBiz studentbiz;
	@Autowired
	private AcademyEnrollBatchBiz academyEnrollBatchBiz;
	
	private int stuid;//学生id
	private Student stu;//学生实体
	
	/**
	 * 加载学生信息
	 */
	public String execute()throws Exception{
		String batchname="";
		AcademyEnrollBatch academyEnrollBatch = new AcademyEnrollBatch();
		stu = studentbiz.findStudentById(stuid);
		if(stu!=null&&stu.getEnrollmentBatchId()>0){
			academyEnrollBatch = academyEnrollBatchBiz.findAcademyEnrollBatchById(stu.getEnrollmentBatchId());
			if(academyEnrollBatch!=null&&!("").equals(academyEnrollBatch.getEnrollmentName())&&academyEnrollBatch.getEnrollmentName()!=null){
				batchname = academyEnrollBatch.getEnrollmentName();
				stu.setAcademyenrollbatchName(batchname);
			}
		}
		return SUCCESS;
	}
	
	//-----------------------------------------------get and set methods-----------------------------------
	public int getStuid() {
		return stuid;
	}
	public void setStuid(int stuid) {
		this.stuid = stuid;
	}
	public Student getStu() {
		return stu;
	}
	public void setStu(Student stu) {
		this.stu = stu;
	}
}
