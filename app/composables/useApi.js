export const useApi = () =>{
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const fetchData = async (url)=>{
        loading.value = true
        error.value = null
        
        try{
            const response = await fetch(url)
            data.value = await response.json()
        }catch(err){
            error.value = err.message
        }finally{
            loading.value = false
        }
    }
    return{
        data,
        loading,
        error,
        fetchData
    }
}
