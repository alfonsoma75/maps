import { Route } from 'wouter';
import MapApp from './MapApp';


export default function Root() {
    return (
        // /lat/lon/text/zoom/width/height/
        <Route path="/maps/:lat/:lon/:title/">
            {(params) => <MapApp lat={params.lat}  lon={params.lon}  title={params.title} />}
        </Route>
    )
}