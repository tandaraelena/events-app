import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react'

const AnyReactComponent = () => <Icon name='marker' size='big' color='red'/>
class SimpleMap extends Component {
  // static defaultProps = {
  //   center: {},
  // };

  render() {
    const { latlng } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBAXEJ4oAwmQcGKx9o43RwTrw_-tFZQOOw'}}
          defaultCenter={latlng}
          defaultZoom={6}
        >
          <AnyReactComponent
            lat={latlng.lat}
            lng={latlng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;