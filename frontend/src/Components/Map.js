import '../Styles/Map.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
} from 'mdb-react-ui-kit';
import styled from 'styled-components'

const Map = () => {
    const ref = useRef();
    console.log('i think map rendering')

    useEffect(() => {
        new window.google.maps.Map(ref.current);
    });

    return (
        <div ref={ref} id="map"/>
    );
}

export default Map;