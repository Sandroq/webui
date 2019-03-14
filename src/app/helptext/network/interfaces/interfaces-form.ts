import { T } from '../../../translate-marker';
import { Validators } from '@angular/forms';
import { rangeValidator } from '../../../pages/common/entity/entity-form/validators/range-validation';

export default {
int_type_placeholder: T('Type'),
int_type_tooltip: T(''),
int_type_options: [
    {label: "Bridge", value: "BRIDGE"},
    {label: "LAGG", value: "LAGG"},
    {label: "VLAN", value: "VLAN"},
],

int_interface_placeholder : T('NIC'),
int_interface_tooltip : T('Enter the FreeBSD device name of the interface. This\
 cannot change after creating the interface.'),
int_interface_validation : [ Validators.required ],

int_name_placeholder : T('Interface Name'),
int_name_tooltip : T('Enter a description of the interface.'),
int_name_validation : [ Validators.required ],

int_dhcp_placeholder : T('DHCP'),
int_dhcp_tooltip : T('Set to enable DHCP. Leave unset to create a static\
 IPv4 or IPv6 configuration. Only one interface can\
 be configured for DHCP.'),

int_ipv4address_placeholder : T('IPv4 Address'),
int_ipv4address_tooltip : T('Enter a static IPv4 address. Example: <i>10.0.0.2</i>.'),

int_v4netmaskbit_placeholder : T('IPv4 Netmask'),
int_v4netmaskbit_tooltip : T('Enter a netmask.'),

int_ipv6auto_placeholder : T('Auto configure IPv6'),
int_ipv6auto_tooltip : T('Set to automatically configure the IPv6 address with\
 <a href="https://www.freebsd.org/cgi/man.cgi?query=rtsol"\
 target="_blank">rtsol(8)</a>. Only one interface can\
 be configured this way.'),

int_ipv6address_placeholder : T('IPv6 Address'),
int_ipv6address_tooltip : T('Enter a static IPv6 address. Example:\
 <i>2001:0db8:85a3:0000:0000:8a2e:0370:7334</i>.'),

int_v6netmaskbit_placeholder : T('IPv6 Prefix Length'),
int_v6netmaskbit_tooltip : T('Select the prefix length used on the network.'),

int_options_placeholder : T('Options'),
int_options_tooltip : T('Enter additional space-delimited parameters from <a\
 href="https://www.freebsd.org/cgi/man.cgi?query=ifconfig"\
 target="_blank">ifconfig(8)</a>.'),

alias_address_placeholder: T('IPv4 Address'),
alias_address_tooltip: T('Enter a static IPv4 address. Example:\
 <i>10.0.0.3</i>.'),

alias_netmaskbit_placeholder: T('IPv4 Netmask'),
alias_netmaskbit_tooltip : T('Enter a netmask.'),

delete_placeholder: T('Delete'),
delete_tooltip: T('Set to delete this alias.'),

alias_address6_placeholder: T('IPv6 Address'),
alias_address6_tooltip: T('Enter a static IPv6 address if DHCP is unset.\
 Example: <i>2001:0db8:85a3:0000:0000:8a2e:0370:7334</i>'),

alias_netmaskbit6_placeholder: T('IPv6 Prefix Length'),
alias_netmaskbit6_tooltip : T('Select the prefix length used on the network.'),

delete_placeholder6: T('Delete'),
delete_tooltip6: T('Set to delete this alias.'),

bridge_members_placeholder: T('Bridge Members'),
bridge_members_tooltip: T(''),

failover_critical_placeholder: T('Failover Critical'),
failover_critical_tooltip: T(''),

failover_group_placeholder: T('Failover Group'),
failover_group_tooltip: T(''),

failover_vhid_placeholder: T('Failover VHID'),
failover_vhid_tooltip: T(''),

failover_aliases_placeholder: T('Failover Aliases'),
failover_aliases_tooltip: T(''),

failover_virtual_aliases_placeholder: T('Failover Virtual Aliases'),
failover_virtual_aliases_tooltip: T(''),

vlan_pint_placeholder: T('Parent Interface'),
vlan_pint_tooltip: T('Select the VLAN Parent Interface. Usually an Ethernet\
 card connected to a configured switch port. Newly\
 created link aggregations will not be available until\
 the system is rebooted.'),
vlan_pint_validation: [Validators.required],

vlan_tag_placeholder: T('Vlan Tag'),
vlan_tag_tooltip: T('Enter the numeric tag configured in the switched network.'),
vlan_tag_validation: [rangeValidator(1, 4095), Validators.required],

vlan_pcp_placeholder: T('Priority Code Point'),
vlan_pcp_tooltip: T('Select the Class of Service. The available 802.1p\
 Class of Service ranges from <i>Best effort (default)</i> \
 to <i>Network control (highest)</i>.'),

lagg_protocol_placeholder : T('Lagg Protocol'),
lagg_protocol_tooltip : T('Select the <a\
 href="%%docurl%%/network.html%%webversion%%#link-aggregations"\
 target="_blank">Protocol Type</a>.<br>\
 <i>LACP</i> is the recommended protocol if the network\
 switch is capable of active LACP.<br>\
 <i>Failover</i> is the default protocol choice and\
 should only be used if the network switch does not\
 support active LACP.'),
lagg_protocol_validation : [ Validators.required ],

lagg_interfaces_placeholder : T('Lagg Interfaces'),
lagg_interfaces_tooltip : T('Select the interfaces to use in the aggregation.<br>\
 Warning: Lagg creation fails if any of the selected\
 interfaces have been manually configured.'),
lagg_interfaces_validation : [ Validators.required ],

mtu_placeholder: T('MTU'),
mtu_tooltip: T(''),
mtu_validation: [rangeValidator(68, 9000)]
}