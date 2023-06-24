import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import Portfolio from "../components/Portfolio"
import Home from "../components/Home";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Portfolio">
                <Portfolio/>
            </ComponentPreview>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
