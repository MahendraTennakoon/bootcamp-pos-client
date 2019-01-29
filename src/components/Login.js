import React, { Component } from 'react';
import { Container, Segment, Header, Form, Button } from 'semantic-ui-react';

class Login extends Component {
    validateCredentials = (e) => {
        const username = e.target.elements["username"].value;
        const password = e.target.elements["password"].value;
        
        this.props.history.push('/orders');
    }
    render() {
        return (
            <div>
                <Container>
                    <Header as='h2' attached='top'>
                        Log In
                    </Header>
                    <Segment attached>
                        <Form onSubmit={this.validateCredentials}>
                            <Form.Field>
                                <label>User name</label>
                                <input name="username" placeholder='User name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input name="password" placeholder='Password' type="password" />
                            </Form.Field>
                            <Button type='submit'>Log In</Button>
                        </Form>
                    </Segment>
                </Container>
            </div>
        );
    }
}

export default Login;