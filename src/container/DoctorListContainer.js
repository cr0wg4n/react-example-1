import {connect} from 'react-redux'
import DoctorList from '../components/DoctorList'
import { getDoctorsApi,deleteDoctorApi } from '../services/DoctorService'
import {CargarDoctores,DeleteDoctor} from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        doctors: state.doctors,
        direccion: 'en cochabamba'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDoctors: () => {
            getDoctorsApi().then(res => {
                dispatch(CargarDoctores(res.data))
            }).catch(err => {
                console.log(err)
            })
        },
        deleteDoctor: (doctor_id) =>{
            console.log(doctor_id);
            deleteDoctorApi(doctor_id).then(res=>{
                dispatch(DeleteDoctor(doctor_id))
            })
        }
    }
}

const DoctorListContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(DoctorList)

export default DoctorListContainer
