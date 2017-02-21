'use strict'; 
var Logger = require('./lib.logger');
var Base = require('./lib.base');
var DeviceManager = require('./lib.manager.deviceManager');
var ZoneManager = require('./lib.manager.zoneManager');

/**
 * this is the manager disposer class. 
 * it holds all available managers
 */
module.exports = class ManagerDisposer extends Base
{
    constructor()
    {
        super();
        this.deviceManager = null;
        this.zoneManager = null;
    }
    
    additionalLogIdentifier()
    {
        return "ManagerDisposer";
    }
    
    createManagers()
    {
        this.createDeviceManager();
        this.createZoneManager();
    }

    createDeviceManager()
    {
        this.logVerbose("Creating device manager");
        this.deviceManager = new DeviceManager();
        this.deviceManager.parmLogger(this.parmLogger());
        this.deviceManager.parmManagerDisposer(this);
    }  

    createZoneManager()
    {
        this.logVerbose("Creating zone manager");
        this.zoneManager = new ZoneManager();
        this.zoneManager.parmLogger(this.parmLogger());
        this.zoneManager.parmManagerDisposer(this);
    }    

}