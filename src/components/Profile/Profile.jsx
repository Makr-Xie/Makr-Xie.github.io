import './index.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className='profile-background'>
        <div className="profile-picture"></div>
      </div>
      <p className='profile-text'>Mark Xie</p>
      <div className='paragraph'>
        <p>Hi, I am Mark.</p>
        <p>a junior students in UIUC.</p>
        <p>a future AI/ML researcher / engineer.</p>
        <p>an amateur photographer.</p>
        <p>a mid-laner with a peak at Master tier.</p>
      </div>
    </div>
  )
}

export default Profile