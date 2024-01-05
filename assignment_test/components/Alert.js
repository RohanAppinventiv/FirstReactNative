import { Alert } from 'react-native';


const UnderDevelopmentAlert = (title = "Caution!", msg = "Under development") => {
    return Alert.alert(title, msg, [{text: 'OK'}, ] )
 }

 export default UnderDevelopmentAlert;