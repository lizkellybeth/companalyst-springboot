package edu.nrao.companalyst.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface JobDetailsRepo extends CrudRepository<CompanyJobDetails, Long> {

	public CompanyJobDetails findByJDMJobDescHistoryID(String jdmJobDescHistoryID);
	
	public List<CompanyJobDetails> findAll();
}
