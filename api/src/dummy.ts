import * as common from "../../api/common/platforms";

export const DummyApp = () => common.specializeConfig( { configuration: { azuread_application: { "test-app": { "name": "testing" } } } } );