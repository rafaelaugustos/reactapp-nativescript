import { hot } from 'react-hot-loader/root'
import React, { Component, createRef } from 'react'
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span, $Switch, $Frame } from 'react-nativescript'
import { ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout'
import { Frame, Page } from 'tns-core-modules/ui/frame/frame'

class AppContainer extends Component {
    pageRef = createRef(<Page />)

    componentDidMount(){
        const frame = this.props.forwardedRef.current

        frame.navigate({
            create: () => {
                const page = this.pageRef.current
                page.addCssFile("./components/AppContainer.scss")

                return page
            }
        });
    }

    render(){
        const { forwardedRef } = this.props

        return(
            <$Frame ref={forwardedRef}>
                <$Page ref={this.pageRef} className="page" actionBarHidden={false}>
                    <$ActionBar className="action-bar">
                        <$Label className="action-bar-title">Home</$Label>
                    </$ActionBar>

                    <$GridLayout rows={[new ItemSpec(1, "star")]} columns={[new ItemSpec(1, "star")]}>
                        <$Label row={0} col={0} className="info" horizontalAlignment="center" verticalAlignment="middle">
                            <$FormattedString>
                                <$Span className="fa" text="&#xf135;"/>
                                <$Span text=" Rafael Augusto"/>
                            </$FormattedString>
                        </$Label>
                    </$GridLayout>
                </$Page>
            </$Frame>
        )
    }
}

export default hot(AppContainer)
