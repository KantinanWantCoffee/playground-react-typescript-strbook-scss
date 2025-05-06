import { Header } from '../../components';

const Garden = () => {
    return (
        <main className="landingzone">
            <section className="landing__hero__zone">
                <div className="floating-balls">
                    <span className="ball ball--1"></span>
                    <span className="ball ball--2"></span>
                    <span className="ball ball--3"></span>
                    <span className="ball ball--4"></span>
                </div>
                <div className="landing__content-wrapper">
                    <div className="landing__content">
                        <h1>Garden</h1>
                    </div>
                    <Header />
                </div>
            </section>
        </main>
    )
}

export default Garden