import React from 'react';

class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state =  {
            data: {},
            loading: false,
            error: false
        }
    }

    async getContents() {
        this.setState({...this.state, loading: true});

        let response = await fetch('https://api.github.com/users/joaopedroabreuu');
        let data = await response.json();
        return data;
    }

    componentDidMount() {
        this.getContents()
        .then( data=> {
            if(data.message === 'Not Found')
                this.setState({...this.state, data: data, loading: false, error: true})
            else 
                this.setState({...this.state, data: data, loading: false, error: false})
        } )
        .catch( error=> {
            console.log(error);
            this.setState({...this.state, loading: false, error: true});
        })
    }

    render() {
        return (
            <div>
                <h1>Página - Home</h1>
                {this.state.loading ? 'Carregando...' : ' '}
                {this.state.error  ? (
                    <p style={{color: 'red'}}>{this.state.data.message}</p>
                ) : (
                    <div>
                        <h2>{this.state.data.name}</h2>
                        <img src={this.state.data.avatar_url} />
                    </div>
                )}
                <h3>MainContent</h3>
            </div>
        )
    }
}

export default Home;