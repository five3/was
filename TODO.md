http://qa.dangdang.com/ddap_platform/project_listProject
***
[{"id":119,"create_date":"2013-07-16 17:41:41.0","memo":"测试工程","name":"测试工程","update_date":"2013-07-16 17:41:41.0"}]

http://qa.dangdang.com/ddap_platform/project_getProjectPageWithElements?id=119
***
[{"id":117,"name":"testing页面","elements":{"element":[{"element_name":"标签名称保存","element_id":168},{"element_name":"是","element_id":413}]}}]

http://qa.dangdang.com/ddap_platform/element_getPageElement?page_id=117
***
[{"id":168,"name":"标签名称保存"},{"id":413,"name":"是"}]

CREATE TABLE `element` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(100) NOT NULL,
  `attribute` text,
  `parent_id` int(11) default NULL,
  `page_id` int(11) NOT NULL,
  `version` int(11) default NULL,
  `type` int(50) default NULL,
  `memo` varchar(1000) default NULL,
  `create_date` datetime default NULL,
  `update_date` datetime default NULL,
  `tag_name` varchar(50) default NULL,
  PRIMARY KEY  (`id`),
  KEY `page_id` (`page_id`),
  KEY `parent_id` (`parent_id`),
  KEY `type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=670 DEFAULT CHARSET=utf8;

HightLight

Load

Cover
