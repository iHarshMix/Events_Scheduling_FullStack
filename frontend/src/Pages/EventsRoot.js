import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation.js'

const EventsRootLayout=()=>{
    return(
        <>
            <EventsNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default EventsRootLayout;