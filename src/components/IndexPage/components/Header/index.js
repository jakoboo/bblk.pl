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
import { useTrail, animated } from 'react-spring';

const Header = () => {
  const trailProps = useTrail(4, {
    from: { opacity: 0, transform: 'translateY(2rem)' },
    opacity: 1,
    transform: 'translateY(0)',
  });

  return (
    <HeaderWrap aria-labelledby='introduction-label'>
      <HeaderContentWrap>
        <CircleWatermark />
        <Blob />
        <HeaderTextWrap>
          <GridPattern />
          <animated.div style={trailProps[0]}>
            <HeaderHeading level={1} id='introduction-label'>
              Full Stack Developer
            </HeaderHeading>
            <Spaced top='m'>
              <animated.div style={trailProps[1]}>
                <Quote>
                  I'm extremely good at googling, and most of the time I
                  understand answers from stack overflow.
                </Quote>
              </animated.div>
              <animated.div style={trailProps[2]}>
                <Text>
                  I'm a full stack developer passionate about new technologies,
                  creating engaging user experience, and sharing what I've
                  learned on my dev blog. I’m majoring in physics at{' '}
                  <Link href='https://www.put.poznan.pl'>
                    Poznań University of Technology
                  </Link>
                </Text>
              </animated.div>
            </Spaced>
            <CallToActionWrap>
              <animated.div style={trailProps[3]}>
                <Button element={Link} to='/about'>
                  <Padded vertical='m' horizontal='l'>
                    Learn more
                  </Padded>
                </Button>
              </animated.div>
            </CallToActionWrap>
          </animated.div>
        </HeaderTextWrap>
      </HeaderContentWrap>
    </HeaderWrap>
  );
};

export default Header;
