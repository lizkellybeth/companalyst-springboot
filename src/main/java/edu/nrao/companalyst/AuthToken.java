package edu.nrao.companalyst;

import java.util.Date;
import java.util.concurrent.TimeUnit;

public class AuthToken {

    private String authToken;
    private Date expireDate;
    
	public AuthToken(String authToken, Date expireDate) {
		super();
		this.authToken = authToken;
		this.expireDate = expireDate;
	}
	
	public String getAuthToken() {
		return authToken;
	}
	public void setAuthToken(String authToken) {
		this.authToken = authToken;
	}
	public Date getExpireDate() {
		return expireDate;
	}
	public void setExpireDate(Date expireDate) {
		this.expireDate = expireDate;
	}
    
    public boolean isExpired() {
		Date now = new Date();
		//get a new token 5 seconds before this one expires
		now.setTime(now.getTime() + 5000);
		if (expireDate.before(now)) {
	    	return true;
	    }
		return false;
	}
    
}
