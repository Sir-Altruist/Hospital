import DashboardIcon from '@mui/icons-material/Dashboard';
import ScoreIcon from '@mui/icons-material/Score';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const dashmenu = [
    {
        name: 'Home',
        path: '/dashboard',
        icon1: <DashboardIcon />,
        icon2: <DashboardIcon sx={{ color: "#5A4EEC" }} />
    },
    {
        name: 'Result',
        path: '/dashboard/result',
        icon1: <ScoreIcon />,
        icon2: <ScoreIcon sx={{ color: "#5A4EEC" }} />
    },
    {
        name: 'Upload Document',
        path: '/dashboard/upload',
        icon1: <LibraryBooksIcon />,
        icon2: <LibraryBooksIcon sx={{ color: "#5A4EEC" }} />
    }
]

export default dashmenu;