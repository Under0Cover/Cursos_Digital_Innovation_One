import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
    display: flex;
    align-center: center;
    flex-direction: row;
    height: 5oopx;
    margin: 0 auto;
    box-sizing: border-box;
    justify-content: space-between;
`

const ContentItem = styled.p `
    color: #fff;
    text-align: center;
    font-family: 'Read';
    width: 500px;
    background-color: #559;
    padding: 10px;
    box-sizing: border-box;
    margin: 80px;
    font-weight: 100;
`

export default function content() {
    return (
        <React.Fragment>
            <Content>
                <ContentItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum sem dui, et euismod velit vehicula sit amet. Duis et augue lacinia, faucibus nulla vel, blandit massa. Mauris ac ante ut enim lobortis blandit id ac turpis. Integer semper quam eu dignissim tincidunt. Nunc vitae lacinia quam. Sed tempus, quam congue volutpat sodales, metus lacus blandit sem, nec blandit enim dolor vel nulla. Maecenas dolor massa, pretium nec varius nec, volutpat vitae velit. Morbi tincidunt tempus ligula, in congue urna lobortis at. Aliquam tempor leo in velit tempor, nec dapibus augue ultricies. Sed eu porttitor lorem, vitae faucibus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc iaculis vehicula orci, a egestas arcu sollicitudin vitae. Donec tincidunt ipsum eget lacus ultrices scelerisque. Duis sollicitudin molestie nibh nec fermentum. Suspendisse potenti.
                </ContentItem>
                <ContentItem>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce feugiat turpis sed est vehicula, quis aliquam elit sodales. Vestibulum tincidunt ante in lacus vulputate, vitae mollis eros egestas. Pellentesque non posuere felis. Donec euismod magna nec sem porttitor egestas. Morbi quis nisl nec orci semper tristique. Nullam non rutrum orci. Vivamus ante augue, porta porttitor massa vitae, vulputate venenatis neque. Phasellus fermentum aliquam urna id pellentesque. Curabitur pulvinar quis risus at efficitur. Proin dolor neque, lacinia non fringilla sed, rutrum in risus. Donec euismod, sem a imperdiet lacinia, diam dui hendrerit dui, sed condimentum neque mauris et tortor. Mauris lacus tellus, sollicitudin eu rutrum molestie, tempus blandit urna. Nulla enim dui, volutpat id felis eu, tristique feugiat metus. Quisque tempor in nulla quis maximus. Donec imperdiet et augue in ullamcorper.
                </ContentItem>
            </Content>
        </React.Fragment>
    );
}