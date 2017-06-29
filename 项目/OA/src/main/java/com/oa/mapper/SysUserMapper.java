package com.oa.mapper;

import com.oa.domain.SysUser;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SysUserMapper {
   
    int deleteByPrimaryKey(Long userId);

    int insert(SysUser record);

    int insertSelective(SysUser record);


    SysUser selectByPrimaryKey(Long userId);

   
    int updateByPrimaryKeySelective(SysUser record);

    int updateByPrimaryKey(SysUser record);
}