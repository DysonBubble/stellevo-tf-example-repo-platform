import * as common from "../../api/common/platforms/util";

export const DummyApp = () => common.specializeConfig( {
  configuration: {
    resources: {
      azuread_application: {
        "test-app": {
          "name": "testing"
        }
      }
    },
    data_sources: {
      azuread_client_config: {
        "cur-config": {

        }
      }
    }
  }
} );