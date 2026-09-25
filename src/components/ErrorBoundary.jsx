import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', this.props.label || '', error, info?.componentStack)
  }

  componentDidUpdate(prevProps) {
    if (this.state.error && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null })
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary-fallback">
          <div className="error-boundary-title">
            {this.props.label ? `${this.props.label} failed to render` : 'This panel failed to render'}
          </div>
          <div className="error-boundary-message">{String(this.state.error?.message || this.state.error)}</div>
        </div>
      )
    }
    return this.props.children
  }
}
