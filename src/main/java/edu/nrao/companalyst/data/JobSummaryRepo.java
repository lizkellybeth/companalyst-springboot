package edu.nrao.companalyst.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface JobSummaryRepo extends CrudRepository<CompanyJob, Long> {

	public CompanyJob findByJDMJobDescHistoryID(String jdmJobDescHistoryID);
	
	public List<CompanyJob> findAll();
}
