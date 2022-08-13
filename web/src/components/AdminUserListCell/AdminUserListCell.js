export const QUERY = gql`
  query FindAdminUserListQuery {
    activeUsers {
      id
      email
      roles
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import AdminUserList from 'src/components/AdminUserList'

export const Success = ({ activeUsers }) => {
  return <AdminUserList activeUsers={activeUsers} />
}
