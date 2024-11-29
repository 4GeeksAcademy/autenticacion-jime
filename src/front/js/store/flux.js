const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			auth:false

		},
		actions: {
			// Use getActions to call a function within a fuction

			signUp: async (data) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data)

					})
				} catch (error) {
					console.log("Error loading message from backend", error)
					return false;
				}


			},

			login: async (data) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data)

					})
					console.log (resp)
					if(resp.status==401) {
						return false
					}
					const info = await resp.json()
					localStorage.setItem("token", info.access_token)
					setStore({auth:true})
					

					// don't forget to return something, that is how the async resolves
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error)
					return false;
				}
			},
			logout: ()=>{
				localStorage.removeItem("token")
				setStore({auth:false})
			}
		}
	};
};

export default getState;
