# @nuvibit/github-terraform-semantic-config 

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish terraform modules with [Github Actions](https://github.com/nuvibit/github-terraform-workflows).

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`conventional-changelog-conventionalcommits`](https://github.com/conventional-changelog/conventional-changelog)

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@nuvibit/github-terraform-semantic-config "
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.
