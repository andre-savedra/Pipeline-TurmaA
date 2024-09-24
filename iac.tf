terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.0.1"
    }
  }
}

provider "azurerm" {  
  resource_provider_registrations = "none"
  subscription_id = "250ae9c3-6c33-4030-b72a-ed22fce22920"
  features {}
}

resource "azurerm_resource_group" "andre_savedra_bot2_group2" {
  name = "andre_savedra_bot2_group2"
  location = "eastus2"
}

resource "azurerm_service_plan" "andre_savedra_bot2_sp2" {
  name = "andre_savedra_bot2_sp2"
  resource_group_name = azurerm_resource_group.andre_savedra_bot2_group2.name
  location = azurerm_resource_group.andre_savedra_bot2_group2.location
  sku_name = "S1"
  os_type = "Windows"
}

resource "azurerm_windows_web_app" "andre_sav_bot_app2" {
  name = "andre-savedra-bot2-app2"
  resource_group_name = azurerm_resource_group.andre_savedra_bot2_group2.name
  location = azurerm_resource_group.andre_savedra_bot2_group2.location
  service_plan_id = azurerm_service_plan.andre_savedra_bot2_sp2.id
  site_config {
    always_on = false
  }
}

resource "azurerm_windows_web_app_slot" "andre_savedra_bot2_slot_qa2" {
  name = "andre-savedra-bot2-slot-qa2"
  app_service_id = azurerm_windows_web_app.andre_sav_bot_app2.id
  site_config {

  }  
}



