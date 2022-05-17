
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

function Portal() {


    return (
        <div className='h-screen flex flex-col'>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-row flex-grow overflow-hidden justify-center'>
                <div className='basis-1/5 flex-shrink-0'>
                    <Sidebar />
                </div>
                <div className='basis-4/5 flex-shrink-0'>
                    <Content />
                </div>
            </div>
            <div>
                <Footer />
            </div>
            
        </div>

    );
}

export default Portal