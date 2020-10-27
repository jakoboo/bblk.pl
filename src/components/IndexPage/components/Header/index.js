import React from 'react';
import Text from '../../../../ui/Text';
import Spaced from '../../../../ui/Spaced';
import Quote from '../../../../ui/Quote';
import Link from '../../../../ui/Link';
import Blob from '../../../../ui/Blob';
import Button from '../../../../ui/Button';
import Padded from '../../../../ui/Padded';
import {
  HeaderWrap,
  HeaderContentWrap,
  HeaderTextWrap,
  HeaderHeading,
  CallToActionWrap,
  GridPattern,
  CircleWatermark,
} from './styles';

const Header = () => (
  <HeaderWrap aria-labelledby='introduction-label'>
    <HeaderContentWrap>
      <CircleWatermark />
      <Blob />
      <HeaderTextWrap>
        <GridPattern />
        <HeaderHeading level={1} id='introduction-label'>
          Full Stack Developer
        </HeaderHeading>
        <Spaced top='m'>
          <Quote>
            I'm extremely good at googling, and most of the time I understand
            answers from stack overflow.
          </Quote>
          <Text>
            I'm a full stack developer passionate about new technologies,
            creating engaging user experience, and sharing what I've learned on
            my dev blog. I’m majoring in physics at{' '}
            <Link href='https://www.put.poznan.pl'>
              Poznań University of Technology
            </Link>
          </Text>
        </Spaced>
        <CallToActionWrap>
          <Button element={Link} to='/about'>
            <Padded vertical='m' horizontal='l'>
              Learn more
            </Padded>
          </Button>
        </CallToActionWrap>
      </HeaderTextWrap>
    </HeaderContentWrap>
  </HeaderWrap>
);

export default Header;
