import Axios from 'axios'

export default Axios_Instance = Axios.create(
    {
        baseURL:"https://the-pet-social.herokuapp.com/"
    }
)