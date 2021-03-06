import React from 'react';
import FastMarker from './FastMarker.jsx';
import { connect } from '../store/Connect';

import '../../sass/components/_highest-lowest-marker.scss';

const HighestLowestMarker = ({ setHighestRef, setLowestRef }) => (
    <>
        <FastMarker
            markerRef={setHighestRef}
            className='sc-highlow sc-highlow--highest'
            offsetTop={-80}
            offsetLeft={-80}
        >
            <span className='spot__shape-circule spot__fill-blue' />
            <span className='spot__label' data-label-pos='top'>
                <span>{`${t.translate('H')}: `}</span>
                <span className='spot__value' />
            </span>
        </FastMarker>

        <FastMarker markerRef={setLowestRef} className='sc-highlow sc-highlow--lowest' offsetTop={-80} offsetLeft={-80}>
            <span className='spot__shape-circule spot__fill-red' />
            <span className='spot__label' data-label-pos='bottom'>
                <span>{`${t.translate('L')} : `}</span>
                <span className='spot__value' />
            </span>
        </FastMarker>
    </>
);

export default connect(({ highestLowest: s }) => ({
    setHighestRef: s.setHighestRef,
    setLowestRef: s.setLowestRef,
}))(HighestLowestMarker);
