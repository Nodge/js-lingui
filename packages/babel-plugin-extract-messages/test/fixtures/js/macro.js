const msg = /*i18n*/{
  id: 'Message'
}

const withDescription = /*i18n: description*/{
  id: 'Message With Description'
}

const withId = /*i18n*/{
  id: 'msg.id',
  defaults: 'Message With Description'
}

const withValues = /*i18n*/{
  id: 'Message With {param}',
  values: {
    param: 42
  }
}

i18n._(/*i18n*/{
  id: 'Message With Description'
})
