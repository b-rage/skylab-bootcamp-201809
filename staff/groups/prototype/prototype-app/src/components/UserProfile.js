import React from 'react'
import logic from '../logic'

const UserProfile = props => {
  return (
    <section className="list-movies">
      <div className="container">
        <div className="row">
          <h4 className="font-weight-bold my-4">Profile</h4>
        </div>
        <div className="row justify-content-center">
        <table className="table table-hover data-profile">
          <tbody>
            <tr>
              <th scope="row">Username</th>
              <td>{logic._user.username}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{logic._user.email}</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>{logic._user.name}</td>
            </tr>
            <tr>
              <th scope="row">Surname</th>
              <td>{logic._user.surname}</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">Movies pending</th>
              <td>{logic._user.pending.length}</td>
            </tr>
            <tr className="table-success">
              <th scope="row">Movies seen</th>
              <td>{logic._user.seen.length}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </section>
  )
}

export default UserProfile