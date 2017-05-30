// external imports
import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj3afpdrhkzih0182a4655f0e',
})

export const client = new ApolloClient({
    networkInterface,
})
