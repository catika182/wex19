import React from 'react'

import home-screen from './screens/home-screen/'
import Map from './Map'
import PanelTimes from './screns/PanelTimes'
import Sponsors from './screens/Sponsors/'
import Vendors from './screens/Vendors'
import VIP from './screens/VIP'
import Workshops from './screens/Workshops'
import Gallery from './screens/Gallery'

import { colors } from './styles'

import { createStackNavigator, createBottomTabNaviagator} from 'react-navigation'

const SponsorsNav = createStackNavigator({
	Sponsors: { screen: Sponsors},
	home-screen: { screen: home-screen }

}, {
	navigartionOptions; {
		headerStyle: {
			backgroundColor: color.primary
		},
		
		headerTintColor: '#fff'

	}
})

const Tabs = createBottomTabNaviagator({
	Sponsors: { screen: SponsorsNav },
	home-screen: { screen: home-screen}
})

export default Tabs