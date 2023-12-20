import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [Ticket, AnimatedTicket] = createIcon({
  name: 'Ticket',
  getIcon: (props) => (
    <Svg fill="none" viewBox="0 0 24 25" {...props}>
      <Path
        d="M21 10.292V7.29199C21 5.29199 20 4.29199 18 4.29199H16.05C15.884 4.29199 15.75 4.42598 15.75 4.59198V7.79199C15.75 8.20199 15.41 8.54199 15 8.54199C14.59 8.54199 14.25 8.20199 14.25 7.79199V4.59198C14.25 4.42598 14.116 4.29199 13.95 4.29199H6C4 4.29199 3 5.29199 3 7.29199V10.292C4.1 10.292 5 11.192 5 12.292C5 13.392 4.1 14.292 3 14.292V17.292C3 19.292 4 20.292 6 20.292H13.95C14.116 20.292 14.25 20.158 14.25 19.992V16.792C14.25 16.382 14.59 16.042 15 16.042C15.41 16.042 15.75 16.382 15.75 16.792V19.992C15.75 20.158 15.884 20.292 16.05 20.292H18C20 20.292 21 19.292 21 17.292V14.292C19.9 14.292 19 13.392 19 12.292C19 11.192 19.9 10.292 21 10.292ZM15.75 13.542C15.75 13.956 15.414 14.292 15 14.292C14.586 14.292 14.25 13.956 14.25 13.542V11.042C14.25 10.628 14.586 10.292 15 10.292C15.414 10.292 15.75 10.628 15.75 11.042V13.542Z"
        fill="currentColor"
      />
    </Svg>
  ),
})