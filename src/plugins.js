module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
            cloudName: 'SantiG',
            apiKey: '168971185123327',
            apiSecret: 'cLd7qJLsLsULAVMijXH_RNx6tdc',
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });