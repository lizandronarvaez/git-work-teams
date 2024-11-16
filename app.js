const resetPassword=(email)=>{

	const user=repo.findByEmail(email); 
		
		if(user){
		   return user.password
		}
		   return null
}
