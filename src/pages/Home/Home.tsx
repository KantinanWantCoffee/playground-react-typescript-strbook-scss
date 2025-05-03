import { Header, Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="landing">
            <section className="landing__hero">
                <div className="floating-balls">
                    <span className="ball ball--1"></span>
                    <span className="ball ball--2"></span>
                    <span className="ball ball--3"></span>
                    <span className="ball ball--4"></span>
                </div>

                <div className="landing__content-wrapper">
                    <div className="landing__content">
                        <h1>
                            Build on the <br />
                            <span className="highlight">Interchain.</span>
                        </h1>
                        <Button label="Contact Us" onClick={() => navigate('/Contact')} />
                        <p>Explore a connected world of apps, assets, and ecosystems.</p>
                    </div>
                    <Header />
                </div>
            </section>

        </main>
    );
};

export default Home;
