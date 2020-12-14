import React,{ Component } from "react";

import GifList from '../components/GifList';
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            search: "YOUR QUERY HERE"
        }
    }


    componentDidMount() {
        this.fetchCall();
    }

    fetchCall = (event) => {
        let search = event !== undefined ? event.target.value : "YOUR QUERY HERE";
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(json => {
                let mapped = json.data.map(obj => {
                    return <GifList key={obj.id} gif={obj.images.original.url} />
                });
                this.setState({
                    gifs: mapped.slice(0,3)
                })
            });
    }

    setSearchHandler = (event) => {
        event.preventDefault();
        this.fetchCall(event);
    }

    render() {
        return (
            <div>
                <GifSearch submitHandler={this.setSearchHandler} />
                <ul>
                    {this.state.gifs}
                </ul>
            </div>
        )
    }
}