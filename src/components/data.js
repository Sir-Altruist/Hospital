import Two from '../assets/images/two.png'
import One from '../assets/images/one.png'
import Three from '../assets/images/three.png'
import Four from '../assets/images/user.png'
import Five from '../assets/images/doctor.jpeg'
import Shell from '../assets/images/shell.png'
import Chevron from '../assets/images/chevron.png'
import Nnpc from '../assets/images/nnpc.png'
import Kpmg from '../assets/images/kpmg.png'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Hospital1 from '../assets/images/hospital.jpg'
import Hospital2 from '../assets/images/hospital1.jpg'
import Hospital3 from '../assets/images/hospital2.jpg'
import Doctor1 from '../assets/images/doctor1.jpg'


const testimonies = [
    {
        img: One,
        content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
         Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
        name: 'Angelia Rossalina'
    },
    {
        img: Two,
        content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
         Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
        name: 'Angelia Rossalina'
    },
    {
        img: Three,
        content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
         Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
        name: 'Angelia Rossalina'
    },
    {
        img: Four,
        content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
         Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
        name: 'Angelia Rossalina'
    },
    {
        img: Five,
        content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
         Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
        name: 'Angelia Rossalina'
    },

]

const clients = [
    {
        img: Shell,
        name: 'Shell'
    },
    {
        img: Chevron,
        name: 'Chevron'
    },
    {
        img: Kpmg,
        name: 'KPMG'
    },
    {
        img: Nnpc,
        name: 'NNPC'
    }

]

const location = [
    {
        icon: <LocationOnIcon fontSize='large' color='error' />,
        name: 'Oyo'
    }
]

const carouselData = [
    {
        img: Doctor1,
        name: 'Health Care for Children'
    },
    {
        img: Hospital1,
        name: 'Medical Checkup'
    },
    {
        img: Hospital2,
        name: 'Appointment'
    },
    {
        img: Hospital3,
        name: 'Qualified Professionals'
    }
]
export { testimonies, clients, location, carouselData }