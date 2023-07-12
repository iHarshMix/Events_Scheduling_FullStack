// import { useParams } from "react-router-dom";
import { json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";


const EventDetailPage=()=>{
    // const params= useParams();
    const data= useRouteLoaderData('event-detail');

    // return(
    //     <>
    //         <h1>Event Detail page</h1>
    //         <p>{params}</p>
    //     </>
    // )
    return(
        <EventItem event={data.event}/>
    )
}
export default EventDetailPage;

export async function loader({request, params}){  // defining loader() for specific event with some /:eventId as params
    console.log(request.url);
    const id= params.eventId;
    
    const response= await fetch('http://localhost:8080/events/'+id);
    if(!response.ok){
        throw json({message: 'Could not fetch the details for selected event'}, {status: 500});
    } else{
        return response;
    }
}


export async function action({request, params}){ // defining action() for specific event with some /:eventId as params
    const eventId= params.eventId;
    const response= await fetch('http://localhost:8080/events/'+eventId, {
        method: request.method
    })

    if(!response.ok){
        throw json({message: 'Could not delete event'}, {status: 500});
    } 
    return redirect('/events');
}