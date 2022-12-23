import { useLocation, useNavigate, useParams } from 'react-router-dom'

function WithRouter(Component) {
    function ComponentWithRouterProp(props) {
        return (
            <Component {...props} 
            history ={{useLocation, useNavigate, useParams}}></Component>
        )

    }

    return ComponentWithRouterProp
}

export default WithRouter