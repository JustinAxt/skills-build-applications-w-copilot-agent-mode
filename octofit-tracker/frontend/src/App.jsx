import { Link } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2 fw-semibold" to="/">
            <img src={logo} alt="" width="36" height="36" />
            OctoFit Tracker
          </Link>
        </div>
      </nav>
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <section className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <span className="badge text-bg-primary mb-3">Fitness, together</span>
                <h1 className="display-5 fw-bold">Welcome to OctoFit Tracker</h1>
                <p className="lead text-secondary mb-0">
                  Your activity tracking, teams, and leaderboard experience starts here.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
