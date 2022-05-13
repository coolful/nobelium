import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                <svg
                  width="240"
                  height="75"
                  viewBox="0 0 240 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
				  <rect
				    width="240"
				    height="75"
				    rx="10"
				    ry="10"
				    featurekey="nameGroupContainer"
				    transform="matrix(1,0,0,1,0,0)"
				    fill="black"
				    stroke="white"
				    strokewidth="1.25"
				  />
				  <path
                    d="M23.281 16.875 l0 -15.547 l-6.5625 0 l0 37.344 l6.5625 0 l0 -21.797 z M69.14099999999999 1.328000000000003 l0 21.25 c0 3.4375 -0.83336 5.9896 -2.5 7.6563 c-0.88539 0.98961 -2.1094 1.7188 -3.6719 2.1875 l0 6.0938 c1.25 -0.15625 2.3438 -0.41664 3.2813 -0.78125 c1.9271 -0.67711 3.5938 -1.6927 5 -3.0469 c1.4063 -1.5104 2.4479 -3.2552 3.125 -5.2343 c0.78125 -2.0313 1.1719 -4.4271 1.1719 -7.1875 l0 -20.938 l-6.4063 0 z M50.938 1.4059999999999988 l0 21.25 c0 3.3334 0.83336 5.8855 2.5 7.6563 c0.98961 0.98961 2.2136 1.6927 3.672 2.1094 l0 6.1719 c-0.88539 -0.10414 -1.9791 -0.36453 -3.2813 -0.78117 c-1.9791 -0.72914 -3.6198 -1.7708 -4.9219 -3.1249 c-1.4584 -1.3541 -2.5261 -3.0729 -3.2032 -5.1563 c-0.72914 -1.875 -1.0938 -4.2709 -1.0938 -7.1875 l0 -20.938 l6.3281 0 z M104.922 1.4059999999999988 c-2.8646 0 -5.5209 0.4686 -7.9688 1.4061 c-2.3959 0.9375 -4.4792 2.2396 -6.2501 3.9063 c-1.7188 1.5625 -3.0729 3.5416 -4.0625 5.9375 c-0.83336 2.0313 -1.3021 4.2448 -1.4063 6.6406 l0 2.3438 l6.875 0 l0 -2.3438 c0.10414 -1.7709 0.39063 -3.2031 0.85938 -4.2969 c0.625 -1.5104 1.4844 -2.8645 2.5781 -4.0624 c1.3021 -1.1979 2.6563 -2.0833 4.0625 -2.6562 c1.6146 -0.625 3.3855 -0.9375 5.3126 -0.9375 l9.8438 0 l0 -5.9375 l-9.8438 0 z M107.89099999999999 18.984 l0.000076294 1.4843 l0.078125 0 c-0.10414 1.6666 -0.41664 3.2031 -0.9375 4.6094 c-0.67711 1.6146 -1.5365 2.9427 -2.5781 3.9844 c-1.1459 1.1459 -2.5 2.0313 -4.0625 2.6563 c-1.6146 0.625 -3.3855 0.9375 -5.3126 0.9375 l-9.8438 0 l0 5.9375 l9.8438 0 c2.8646 0 5.5209 -0.46875 7.9688 -1.4063 c2.3959 -0.9375 4.4792 -2.2396 6.2501 -3.9063 c1.8229 -1.8229 3.177 -3.802 4.0624 -5.9374 c0.9375 -2.0834 1.4063 -4.375 1.4063 -6.875 l0 -1.4844 l-6.875 0 z M126.0938 1.4059999999999988 l27.813 0 l0 5.9375 l-27.813 0 l0 -5.9375 z M126.0938 32.6562 l27.734 0 l0 5.9375 l-27.734 0 l0 -5.9375 z M126.0938 16.875 l25.078 0 l0 5.8594 l-25.078 0 l0 -5.8594 z M176.484 29.375 l3.5156 -4.6875 l-0.078125 -0.15625 z M196.875 1.4059999999999988 l-7.5 0 l-9.2969 13.359 l-9.2188 -13.359 l-7.7344 0 l13.047 18.281 l-13.516 18.906 l8.3594 0 z M197.344 38.5937 l-10.313 -14.609 l-3.9063 5.2344 l6.5625 9.375 l7.6563 0 z M209.1406 1.328000000000003 l-7.2656 0 l14.531 22.578 l0 14.766 l7.1094 0 l0 -14.922 z M238.125 1.328000000000003 l-6.7969 0 l-8.5938 12.266 l3.8281 5.1563 z"
                    featurekey="nameFeature-0"
                    transform="matrix(0.9033158705497193,0,0,0.9033158705497193,4.89791349416296,18.800716066937117)"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
