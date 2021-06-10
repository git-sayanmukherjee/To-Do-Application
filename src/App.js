import './App.css';
import SiteHeader from './commons/siteHeader.js';
import SiteFooter from './commons/siteFooter.js';
import Listing from './Listing.js';
import DiaryPage from './DiaryPage.js';
import CalendarReact from './Calendar.js';

function App() {
    return (
        <div className="site-body">
            <SiteHeader />
            <div className="row">
                <div className="col-md-3"><Listing /></div>
                <div className="col-md-6"><DiaryPage /></div>
                <div className="col-md-3"><CalendarReact /></div>
            </div>
            <SiteFooter />
        </div>
    );
}

export default App;