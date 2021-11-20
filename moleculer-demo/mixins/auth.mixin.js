module.exports = {
    methods: {
        checkIsAuthenticated(ctx) {
            if (!ctx.meta.user)
            throw new Error("lütfen login olunuz");

        
          
				 
        },

        
        
        
    }
}


// const tokensm =   req.header("Authorization").replace("Bearer ", "")
// const snc =   jwt.verify(tokensm,"sadsfdsfsd")