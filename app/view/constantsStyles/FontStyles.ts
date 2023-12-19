import {TextStyle} from 'react-native';

const FontStyles = {
  Title34Bold: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.41,
  },
  Title28Bold: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.34,
  },
  Headline20Bold: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.75,
  },
  Headline20Semibold: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.75,
  },
  Headline17Medium: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  Headline17Regular: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  Subheadline15Regular: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  Headline17Semibold: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  CaptionCaps13Bold: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
  Caption13Medium: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
  Caption12Medium: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
  Subheadline15Semibold: {
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  Footnote13Regular: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.07,
  },
  Title80Light: {
    fontWeight: '300',
    fontSize: 80,
    lineHeight: 88,
  },
  Title56Medium: {
    fontWeight: '500',
    fontSize: 56,
    lineHeight: 67,
    letterSpacing: -0.17,
  },
  StoriesHeadline1: {
    fontWeight: '900',
    fontSize: 40,
    lineHeight: 50,
    letterSpacing: 0.5,
  },
  StoriesHeadline2: {
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0.42,
  },
  StoriesText: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.38,
  },
};

export default FontStyles as Record<keyof typeof FontStyles, TextStyle>;
