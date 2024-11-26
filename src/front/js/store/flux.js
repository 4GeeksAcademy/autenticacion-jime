const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			signUp: async (data) => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
						method:"POST", 
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data)

					})
					console.log(resp)
					
					// don't forget to return something, that is how the async resolves
					return true;
				}catch(error){
					console.log("Error loading message from backend", error) 
					return false;
				}
			},
			
		}
	};
};

export default getState;
